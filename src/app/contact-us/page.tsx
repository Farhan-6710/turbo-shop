import ScrollToTop from "@/components/extras/ScrollToTop";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import Footer from "@/components/footer/Footer";
import FormComponent from "@/components/contact-us/FormComponent";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import BreadcrumbSection from "@/components/products-listing/BreadcrumbSection";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <BreadcrumbSection
        title="CONTACT US"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "contact-us" }]}
      />
        <div className="container mx-auto gap-4 py-6 sm:py-12">
          <FormComponent />
        </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
