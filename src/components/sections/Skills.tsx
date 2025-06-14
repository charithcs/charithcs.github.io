
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const skillsData = [
  { subject: 'Incident Response', value: 90 },
  { subject: 'Blue Team Ops', value: 95 },
  { subject: 'SIEM/SOC', value: 85 },
  { subject: 'Threat Intelligence', value: 80 },
  { subject: 'Network Security', value: 88 },
  { subject: 'Malware Analysis', value: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <Card>
          <CardContent className="p-2 md:p-6">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <defs>
                  <radialGradient id="colorUv">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </radialGradient>
                </defs>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Charith S" dataKey="value" stroke="hsl(var(--primary))" fill="url(#colorUv)" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
