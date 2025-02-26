import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { School, Users, Newspaper, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Raqamli ta'lim texnologiyalari markazi
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Zamonaviy tibbiyot ta'limi uchun raqamli yechimlar
        </p>
        <Link href="/register">
          <Button size="lg">Ro'yxatdan o'tish</Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <School className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Zamonaviy ta'lim</h2>
            <p className="text-gray-600">
              Eng so'nggi raqamli texnologiyalar asosida o'qitish
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Malakali xodimlar</h2>
            <p className="text-gray-600">
              Tajribali va malakali o'qituvchilar jamoasi
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Newspaper className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Yangiliklar</h2>
            <p className="text-gray-600">
              Sohaga oid so'nggi yangiliklar va yangiliklardan xabardor bo'ling
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">O'quv materiallar</h2>
            <p className="text-gray-600">
              Keng qamrovli o'quv materiallari katalogi
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
