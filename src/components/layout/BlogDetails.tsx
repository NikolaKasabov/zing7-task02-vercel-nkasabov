import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { allBlogs } from "../../../public/blogData";
import BlogItemSmallInDetails from "./BlogItemSmallInDetails";
import Quote from "./Quote";
import image from "../../../public/images/blogDetails.png";
import BlogDetailsAuthor from "./BlogDetailsAuthor";
import blogDetailsAuthorImage from "../../../public/images/blogDetailsAuthorImage.png";
import { Fragment } from "react";
import BlogItemNormal from "./BlogItemNormal";

export default function BlogDetails() {
  const router = useRouter();
  const { blogId }: any = useParams();
  const blog = allBlogs[blogId - 1];

  if (!blog) {
    router.push("/blog");
  }

  function handleBlogItemClick(blogId: any) {
    router.push(`/blog/${blogId}`);
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

      <section className="pt-[100px] pb-[180px] px-[20px] max-lg:py-[60px]">
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

          <Image src={image} alt="blog image" className="mt-[70px]" />

          <h3 className="mt-[70px] text-5xl font-bold tracking-[-0.67px]">What is a sales funnel?</h3>
          <p className="mt-[20px] text-lg">
            In order to fully answer the question “What is a sales funnel?”, we need to tackle the different steps of
            the funnel. While different organizations have their own ways of managing and naming the sales process and
            customer touchpoints, these are usually structured into three distinct stages.
          </p>

          <h4 className="mt-[70px] text-[32px] font-bold leading-[1.3125] tracking-[-0.44px]">
            1. Top of the sales funnel: Awareness and discovery
          </h4>
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

          {blog && (
            <BlogDetailsAuthor
              name={blog.author}
              jobTitle={"Founder & CEO"}
              image={blogDetailsAuthorImage}
              className="mt-[20px]"
            />
          )}
        </div>
      </section>

      <section className="py-[120px] bg-secondary px-[20px] max-lg:py-[60px]">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-[64px] font-bold leading-[1.1563] tracking-[-0.89px] max-lg:text-[40px] max-lg:text-center">
            More from this topic
          </h2>

          <div className="mt-[70px] grid grid-cols-3 gap-x-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[40px] max-lg:mt-[40px]">
            {allBlogs.slice(5, 8).map((item, index) => (
              <Fragment key={index}>
                <BlogItemNormal {...item} onClick={handleBlogItemClick} />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
