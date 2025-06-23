import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

const schema = z.object({
  name: z.string().min(2),
  bio: z.string().min(10),
  category: z.string(),
  feeRange: z.string(),
  location: z.string(),
});

export default function OnboardingForm() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => {
    axios.post("http://localhost:5000/api/artists", data).then(() => {
      alert("Artist submitted!");
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-4 max-w-lg mx-auto"
    >
      <Input placeholder="Name" {...register("name")} />
      <Textarea placeholder="Bio" {...register("bio")} />
      <Input placeholder="Category" {...register("category")} />
      <Input placeholder="Fee Range" {...register("feeRange")} />
      <Input placeholder="Location" {...register("location")} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
