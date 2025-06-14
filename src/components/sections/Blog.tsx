
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  description: string;
}

const fetchMediumPosts = async (): Promise<MediumPost[]> => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@charithcs9`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  if (data.status !== 'ok') {
    throw new Error("Failed to fetch posts from Medium via rss2json");
  }
  return data.items;
};

const Blog = () => {
  const { data: posts, isLoading, isError } = useQuery<MediumPost[]>({
    queryKey: ['mediumPosts'],
    queryFn: fetchMediumPosts,
  });

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <Card key={index} className="flex flex-col">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent className="flex-grow">
          <Skeleton className="h-4 w-1/2 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-5 w-28" />
        </CardFooter>
      </Card>
    ));
  }
  
  const cleanDescription = (description: string) => {
    return description.replace(/<h4.*?>.*?<\/h4>|<figure.*?>.*?<\/figure>|<img.*?>/g, '');
  }

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">From my Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            renderSkeletons()
          ) : isError ? (
            <p className="text-destructive text-center col-span-3">Failed to load blog posts.</p>
          ) : (
            posts?.slice(0, 3).map((post, index) => (
              <Card key={index} className="bg-background/50 flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    {new Date(post.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <div
                    className="text-muted-foreground line-clamp-3 text-sm"
                    dangerouslySetInnerHTML={{ __html: cleanDescription(post.description) }}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More on Medium
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
