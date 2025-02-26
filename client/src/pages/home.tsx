import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { School, Users, Newspaper, BookOpen, GraduationCap, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative py-20 px-4 -mt-8 bg-gradient-to-br from-primary/90 to-primary text-white rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Farg'ona jamoat salomatligi tibbiyot instituti
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            FJSTIRTTM
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Zamonaviy tibbiyot ta'limi uchun raqamli yechimlar va innovatsion texnologiyalar
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Bizning imkoniyatlar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zamonaviy ta'lim</h3>
              <p className="text-gray-600">
                Eng so'nggi raqamli texnologiyalar asosida o'qitish va amaliyot
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interaktiv ta'lim</h3>
              <p className="text-gray-600">
                Virtual laboratoriyalar va simulyatorlar yordamida amaliy ko'nikmalarni rivojlantirish
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">O'quv resurslar</h3>
              <p className="text-gray-600">
                Video darslar, elektron kitoblar va boshqa raqamli materiallar
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Statistika
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Talabalar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">O'quv kurslari</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Online ta'lim</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}