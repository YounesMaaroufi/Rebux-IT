import { z } from "zod";

export const shippingSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  appartement: z.string().optional(),
  city: z.string(),
  zipCode: z.string(),
});

export type shippingSchemaType = z.infer<typeof shippingSchema>;
