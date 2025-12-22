import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GothicButton } from "@/components/GothicButton";
import { useCreateApplication } from "@/hooks/use-applications";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Apply() {
  const { mutate, isPending, isSuccess } = useCreateApplication();

  const form = useForm<InsertApplication>({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: {
      name: "",
      discordHandle: "",
      reason: "",
      experience: "",
    },
  });

  function onSubmit(data: InsertApplication) {
    mutate(data);
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md text-center space-y-8 border border-white/20 p-12 bg-black relative"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white" />
            
            <h2 className="text-3xl font-display tracking-widest text-white">Received</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Your application has been etched into the void. The Elders will review your request. 
              Do not contact us. We will find you if you are worthy.
            </p>
            <GothicButton onClick={() => window.location.href = '/'} variant="outline">
              Return to Silence
            </GothicButton>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20 px-6 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="block text-white/40 font-display text-sm tracking-[0.4em] uppercase mb-4">
            Initiation
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white tracking-wide">
            Join Us
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-black/50 border border-white/10 p-8 md:p-12 backdrop-blur-sm"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 font-display tracking-widest text-xs uppercase">Name or Alias</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What do they call you?" 
                        {...field} 
                        className="bg-transparent border-white/20 text-white rounded-none focus:ring-0 focus:border-white h-12 font-light placeholder:text-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 font-serif italic text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discordHandle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 font-display tracking-widest text-xs uppercase">Discord Handle</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="username#0000" 
                        {...field} 
                        className="bg-transparent border-white/20 text-white rounded-none focus:ring-0 focus:border-white h-12 font-light placeholder:text-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 font-serif italic text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 font-display tracking-widest text-xs uppercase">Why do you seek the void?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Speak your truth..." 
                        {...field} 
                        className="bg-transparent border-white/20 text-white rounded-none focus:ring-0 focus:border-white min-h-[120px] font-light placeholder:text-white/20 resize-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 font-serif italic text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/60 font-display tracking-widest text-xs uppercase">Skills / Offerings (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What do you bring to the altar?" 
                        {...field} 
                        value={field.value || ""}
                        className="bg-transparent border-white/20 text-white rounded-none focus:ring-0 focus:border-white min-h-[100px] font-light placeholder:text-white/20 resize-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 font-serif italic text-xs" />
                  </FormItem>
                )}
              />

              <div className="pt-8 flex justify-center">
                <GothicButton 
                  type="submit" 
                  disabled={isPending}
                  variant="solid"
                  className="w-full md:w-auto"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Communing...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </GothicButton>
              </div>
            </form>
          </Form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
