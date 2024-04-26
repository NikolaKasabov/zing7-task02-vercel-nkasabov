import { useParams, useRouter } from "next/navigation";
import { allBlogs } from "../../../public/blogData";
import BlogItemSmallInDetails from "./BlogItemSmallInDetails";
import Image from "next/image";
import Quote from "./Quote";

export default function BlogDetails() {
  const router = useRouter();

  const { blogId }: any = useParams();
  const blog = allBlogs[blogId - 1];

  if (!blog) {
    router.push("/blog");
  }

  return (
    <>
      <section className="pt-[70px] bg-secondary px-[20px]">
        <div className="max-w-[750px] mx-auto">
          <BlogItemSmallInDetails {...blog} />
        </div>

        <div className="mt-[45px] max-w-[945px] mx-auto">
          <Image src={blog?.image} alt="blog post image" className="w-full" />
        </div>
      </section>

      <section className="pt-[100px] px-[20px] max-lg:pt-[60px]">
        <div className="max-w-[750px] mx-auto">
          <p className="text-2xl font-medium leading-[1.4167] tracking-[-0.33px]">
            The Psychology of Short-Form Content: Why We Love Bite-Sized Videos. The Psychology of Short-Form Content:
            Why We Love Bite-Sized Videos. The Psychology of Short-Form Content: Why We Love Bite-Sized Videos
          </p>
          <h3 className="mt-[40px] text-5xl font-bold tracking-[-0.67px]">What is a sales funnel?</h3>
          <p className="mt-[18px] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mt-[18px] text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?&quot;
          </p>
          <Quote author="Matthew Barker" className="!mt-[12px]">
            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident&quot;
          </Quote>
        </div>
      </section>
    </>
  );
}
