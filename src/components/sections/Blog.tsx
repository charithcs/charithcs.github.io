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
      <Card key={index} className="flex flex-col unified-card">
        <CardHeader>
          <Skeleton className="h-6 w-3/4 bg-muted" />
        </CardHeader>
        <CardContent className="flex-grow">
          <Skeleton className="h-4 w-1/2 mb-4 bg-muted" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-2/3 bg-muted" />
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-5 w-28 bg-muted" />
        </CardFooter>
      </Card>
    ));
  }
  
  const cleanDescription = (description: string) => {
    return description.replace(/<h4.*?>.*?<\/h4>|<figure.*?>.*?<\/figure>|<img.*?>/g, '');
  }

  return (
    <section id="blog" className="section-padding unified-section-bg">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white drop-shadow-none">
          From my Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            renderSkeletons()
          ) : isError ? (
            <p className="text-destructive text-center col-span-3">Failed to load blog posts.</p>
          ) : (
            posts?.slice(0, 3).map((post, index) => (
              <Card key={index} className="flex flex-col unified-card transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-lg md:text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-white/70 mb-4">
                    {new Date(post.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <div
                    className="text-white/80 line-clamp-3 text-sm"
                    dangerouslySetInnerHTML={{ __html: cleanDescription(post.description) }}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 text-primary">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="underline">
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