import { shippingSchema, shippingSchemaType } from "@/lib/validators/shipping";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";

interface ShippingInfomrationProps {
  setCompleted: (completed: boolean) => void;
}

const ShippingInfomration: FC<ShippingInfomrationProps> = ({
  setCompleted,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<shippingSchemaType>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      address: "",
      appartement: "",
      city: "",
      firstName: "",
      lastName: "",
      zipCode: "",
    },
  });

  // handling the submit button
  const onSubmit = async (payload: shippingSchemaType) => {
    // you should use node.js for this approach
    try {
      console.log(payload);

      await axios.post("http://localhost:3000" + "/knowme/v1/insert", payload);
      toast.success("informations sent successfully");
    } catch (error) {
      console.error("something went wrong");
      toast.error("something went wrong, please try again later");
    } finally {
      setCompleted(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div className="flex justify-between gap-2">
        <Input
          {...register("firstName")}
          className="border-black rounded-none"
          placeholder="First Name"
        />
        <Input
          {...register("lastName")}
          className="border-black rounded-none"
          placeholder="Last Name"
        />
      </div>
      <Input
        {...register("address")}
        className="border-black rounded-none"
        placeholder="Address"
      />
      <Input
        {...register("appartement")}
        className="border-black rounded-none"
        placeholder="Appartement, suite, etc (optional)"
      />
      <Input
        {...register("city")}
        className="border-black rounded-none"
        placeholder="City"
      />
      <Input
        {...register("zipCode")}
        className="border-black rounded-none w-fit"
        placeholder="ZipCode"
        maxLength={6}
      />

      <Button type="submit">Continue To Payment</Button>
    </form>
  );
};

export default ShippingInfomration;
