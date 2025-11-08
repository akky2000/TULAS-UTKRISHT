import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is UTKRISHT 2K25?',
      answer: 'UTKRISHT 2K25 is one of the biggest technical events in the history of Tula\'s Institute.'
    },
    {
      question: 'What are the Dates and Timings of the event?',
      answer: 'The event will start at 9 AM on 13th November and continue till 14th November, 5 PM.'
    },
    {
      question: 'How can I participate in the event?',
      answer: 'Explore various events on the UTKRISHT website and register for the ones that excite you the most.'
    },
    {
      question: 'Is there any entry fee for UTKRISHT 2K25?',
      answer: 'No, all events under UTKRISHT 2K25 are free to participate in and explore.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wider">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-light">Find answers to common questions about UTKRISHT 2K25</p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <ChevronDown size={24} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
