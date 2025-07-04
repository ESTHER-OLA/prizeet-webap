"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus, Headset } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Prizeet?",
    answer:
      "Prizeet is a smart shopping platform that helps users make informed purchasing decisions by comparing gadgets, features, and prices from multiple trusted vendors. It simplifies the process of finding the best deals by gathering up-to-date product and price information in one place.",
  },
  {
    question: "How do I track my order after purchase?",
    answer:
      "Once your order has shipped, you will receive an email with your order ID. You can use this ID to view your order status and tracking information on your account page on Prizeet. Additionally, you can send and receive messages related to your order there.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "While we are working on integrating a secure and reliable payment system into the platform, all payments should currently be initiated via WhatsApp after you receive an official Prizeet invoice. For added security, you will also receive a two-factor authentication code from team.prizeet@gmail.com to confirm that the invoice was legitimately issued by Prizeet. Please ensure the email is indeed from team.prizeet@gmail.com before proceeding with any payment.",
  },
  {
    question: "How can I contact customer support for assistance?",
    answer:
      "You can reach our customer support team via live chat on our website, by emailing support@prizeet.com, or by calling our support line on +2349114202172. Our team is available 24/7 to assist you with any inquiries.",
  },
  {
    question: "Do you offer warranty on smartphones?",
    answer:
      "Yes, all smartphones sold through Prizeet come with manufacturer warranty. The warranty period varies by brand and model. Our vendors are verified and provide authentic products with valid warranties.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(20, 104, 178, 0.9), rgba(11, 47, 95, 0.95)), url('/images/bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start text-white">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-5">
            Frequently Asked <span className="text-[#FD9B4D]">Questions</span>
          </h2>
          <p className="text-lg text-slate-200 mb-8">
            Can’t find what you&apos;re looking for? We’re just a message away.
          </p>
          <Button className="bg-[#FD9B4D] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl">
            <Headset className="w-5 h-5 mr-2" />
            Contact Support
          </Button>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <CollapsibleTrigger asChild>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 0px 12px #FD9B4D",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full flex justify-between items-center text-left p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl h-auto transition-all"
                >
                  <span className="font-medium text-white text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-[#FD9B4D] p-1 rounded-full">
                      {openItems.includes(index) ? (
                        <Minus
                          className="h-4 w-4 text-white"
                          data-testid="faq-icon-minus"
                        />
                      ) : (
                        <Plus
                          className="h-4 w-4 text-white"
                          data-testid="faq-icon-plus"
                        />
                      )}
                    </div>
                  </motion.div>
                </motion.button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openItems.includes(index) ? 1 : 0,
                    height: openItems.includes(index) ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-6 text-slate-200 text-sm leading-relaxed overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
