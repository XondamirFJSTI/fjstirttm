import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Raqamli ta'lim texnologiyalari markazi haqida
        </h1>
        <p className="text-gray-600 mb-8">
          Bizning markazimiz tibbiyot sohasidagi ta'lim jarayonini zamonaviy raqamli texnologiyalar bilan boyitish va 
          sifatini oshirish maqsadida tashkil etilgan. Biz o'z oldimizga qo'ygan maqsadlarga erishish uchun doimiy ravishda 
          yangi innovatsion yechimlarni joriy etib kelmoqdamiz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <Building2 className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Zamonaviy infratuzilma</h2>
            <p className="text-gray-600">
              Markazimiz eng so'nggi rusmdagi kompyuter va o'quv jihozlari bilan ta'minlangan. 
              Virtual reallik, simulyatorlar va boshqa zamonaviy texnologiyalar mavjud.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <GraduationCap className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Yuqori sifatli ta'lim</h2>
            <p className="text-gray-600">
              O'quv dasturlarimiz xalqaro standartlarga mos ravishda ishlab chiqilgan. 
              Nazariy va amaliy mashg'ulotlar optimal tarzda uyg'unlashtirilgan.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Maqsad va vazifalar</h2>
            <p className="text-gray-600">
              Tibbiyot ta'limini raqamlashtirish orqali malakali kadrlar tayyorlash.
              Zamonaviy texnologiyalarni tibbiyot sohasiga tatbiq etish.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Yutuqlarimiz</h2>
            <p className="text-gray-600">
              Ko'plab xalqaro hamkorlik aloqalari, innovatsion loyihalar va 
              zamonaviy o'quv dasturlarini joriy etish borasida erishilgan yutuqlar.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
