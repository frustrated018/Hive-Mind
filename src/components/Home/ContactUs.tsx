import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function ContactUs() {
  return (
    <MaxWidthWrapper className="py-10">
      <section className="grid gap-4 gap-y-2 grid-cols-1 lg:grid-cols-3">
        <section>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg/relaxed max-w-sm mx-auto xl:mx-0">
            If you face any issues using the site feel free to report it. Also
            if you have any feedback for us feel free to drop them in our inbox
          </p>
        </section>

        <div className="lg:col-span-2">
          <div className="grid gap-4 gap-y-5 grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <Label htmlFor="full_name">Full Name</Label>
              <Input type="text" name="full_name" id="full_name" />
            </div>

            <div className="md:col-span-5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="email@domain.com"
              />
            </div>

            <div className="md:col-span-3">
              <Label htmlFor="address">Country</Label>
              <Input type="text" name="address" id="address" placeholder="" />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="city">City</Label>
              <Input type="text" name="city" id="city" placeholder="" />
            </div>

            <div className="inline-flex items-end">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
