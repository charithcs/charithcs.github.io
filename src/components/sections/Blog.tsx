
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  { title: "Deconstructing the Latest Zero-Day", date: "June 10, 2025" },
  { title: "A Guide to Effective Log Analysis", date: "May 22, 2025" },
  { title: "The Future of AI in Cybersecurity", date: "April 15, 2025" },
]

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
