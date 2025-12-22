import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type ApplicationInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateApplication() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      // Client-side validation using the shared schema first (optional, but good practice)
      const validated = api.applications.create.input.parse(data);
      
      const res = await fetch(api.applications.create.path, {
        method: api.applications.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.applications.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit application");
      }

      return api.applications.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Received",
        description: "Your soul has been weighed. We will contact you.",
        className: "bg-black border-white text-white font-serif",
      });
      // Invalidate admin list if it existed
      queryClient.invalidateQueries({ queryKey: [api.applications.list.path] });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
        className: "bg-black border-red-900 text-red-500 font-serif",
      });
    },
  });
}
