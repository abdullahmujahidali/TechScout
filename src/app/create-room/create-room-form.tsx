"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(50),
  language: z.string().min(1).max(50),
  githubRepo: z.string().url().optional(),
});

export function CreateRoomForm() {
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      language: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Example Room" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="This is a description of the example project that i am working on"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please describe what you will be coding on
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Programming Language</FormLabel>
              <FormControl>
                <Input placeholder="Typescript" {...field} />
              </FormControl>
              <FormDescription>
                List all the primary programming languages you will be using
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Repo</FormLabel>
              <FormControl>
                <Input placeholder="https://github.com/" {...field} />
              </FormControl>
              <FormDescription>
                Please put the project link that you are working on
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
