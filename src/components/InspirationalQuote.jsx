import { useState, useEffect } from 'react';

const InspirationalQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'bxkxrxjHqaG5hPaygWZbuQ==ouhnx8OzqnHS0SW9'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-dark font-serif">Loading inspirational quote...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-dark font-serif">Unable to load quote at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-accent">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl font-bold text-dark mb-4 font-serif">
          "{quote.quote}"
        </blockquote>
        <cite className="text-lg text-primary font-serif">
          — {quote.author}
        </cite>
      </div>
    </section>
  );
};

export default InspirationalQuote;
