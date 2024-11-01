"use client";

export function LatestPost() {
  // const [latestPost] = api.product.useSuspenseQuery();

  // const utils = api.useUtils();
  // const [name, setName] = useState("");
  // const createPost = api.post.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.post.invalidate();
  //     setName("");
  //   },
  // });

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-bold">Latest Post</h2>
    </div>
  );
}
