"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema as contactSchema } from "@/typing/contact";
import { sendContactEmail } from "@/services/server/contact/email";
import { connectToSupabase } from "@/lib/supabase/client";
import { createContact } from "@/services/supabase/contacts";

export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      subject: "",
      message: "",
    },
  });

  const fileRef = form.register("attachments");

  const supabase = connectToSupabase();

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    console.log(values);

    // TODO: save message in database for records
    const contactData = {
      firstName: values.firstName,
      lastName: values.lastName || "",
      emailAddress: values.emailAddress,
    };

    await supabase.auth.signInAnonymously();

    await createContact(contactData);

    // TODO: contact handling
    // await sendContactEmail(values);

    // TODO: send email
  };

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center w-full h-full grow my-4">
      <h1 className="font-semibold text-2xl">Contact Me</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full sm:w-2/3 px-4 pb-2"
        >
          <section className="flex flex-row gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      className="shadow-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Smith"
                      {...field}
                      className="shadow-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    {...field}
                    className="shadow-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Opportunity"
                    {...field}
                    className="shadow-md"
                  />
                </FormControl>
                <FormDescription className="px-2">
                  Summary of Message
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hello! My name is John Smith and I would like to..."
                    className="min-h-[140px] sm:min-h-[160px] shadow-md"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* TODO: attachments input for word docs and pdfs */}
          {/* <FormField
            control={form.control}
            name="attachments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Attachments</FormLabel>
                <FormControl>
                  <Input
                    className="shadow-md"
                    type="file"
                    multiple
                    {...fileRef}
                    accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </FormControl>
                <FormDescription className="px-2">
                  Only PDFs and Word Documents are allowed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit" className="w-full font-semibold">
            Send
          </Button>
        </form>
      </Form>
    </main>
  );
}
