"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ImageUploading from "react-images-uploading";
import ImageInput from "./ImageInput";

/* The below code is a React component for a registration form. It handles form submission, image
selection, and user registration. */
const RegisterationForm = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  /**
   * The function `changeImage` sets the images state and displays a warning toast if any of the form
   * fields are empty.
   * @returns If any of the fields in the form (email, name, username, password) are empty, the function
   * will return and display a warning toast message saying "All Field are Necessary".
   */
  const changeImage = (imageList) => {
    setImages(imageList);

    if (
      form.email === "" ||
      form.name === "" ||
      form.username === "" ||
      form.password === ""
    ) {
      toast.warning("All Field are Necessary");
      return;
    }
  };

  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    role: "user",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (
      form.email === "" ||
      form.name === "" ||
      form.username === "" ||
      form.password === ""
    ) {
      toast.warning("All Fields are necessary");
      return;
    }

    registerUser();
  };

  /**
   * The `registerUser` function is an asynchronous function that sends a POST request to a registration
   * API endpoint with user details and handles the response accordingly.
   */
  const registerUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userDetails: {
            form: form,
            image: images[0].data_url,
          },
        }),
      });

      const response = await res.json();
      setLoading(false);
      if (response.success) {
        toast.success(response.message);

        setTimeout(() => {
          // router.push("/user/email_verification");
          router.push(`/user/email_verification?username=${form?.username}`);
        }, 2000);
        setForm({
          name: "",
          email: "",
          username: "",
          password: "",
          role: "user",
        });
      } else toast.error(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  /* The below code is using the useEffect hook in a React component. It is checking the value of the
 "status" variable and if it is equal to "authenticated", it will navigate the user back to the
 previous page using the "router.back()" function. The useEffect hook is triggered whenever the
 "status" or "router" variables change. */
  useEffect(() => {
    if (status === "authenticated") {
      router.back();
    }
  }, [status, router]);

  return (
    <section className="w-screen dark:drop-shadow-xl">
      <form onSubmit={formSubmit} className="pt-8 mx-5 mb-24 ">
        <div className="px-10 py-10 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <h1 className="pb-4 mb-4 text-lg font-semibold text-center text-gray-400">
            Registration Form
          </h1>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <div className="flex">
                <input
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                  value={form?.name}
                  type="text"
                  name="name"
                  id="website-admin"
                  className=" rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                />
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>
                <input
                  onChange={(e) => {
                    setForm({ ...form, username: e.target.value });
                  }}
                  value={form?.username}
                  type="text"
                  name="username"
                  id="user-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name123"
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 w-full mt-2 mb-6 group">
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                value={form?.email}
                type="email"
                name="email"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16 8.00169L16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5"
                      strokeWidth="2"
                      stroke="#9CA3AF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <input
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                value={form?.password}
                type="password"
                name="password"
                id="password-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="   *************"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 ">
              <ImageUploading
                multiple
                value={images}
                onChange={changeImage}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="flex flex-row space-x-3 upload__image-wrapper">
                    {images.length == 0 && (
                      <>
                        <button
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <ImageInput />
                        </button>
                        <p className="mt-3 text-gray-400">Upload Image</p>
                      </>
                    )}
                    &nbsp;
                    {/* <button onClick={onImageRemoveAll}>
                      Remove all images
                    </button> */}
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item ">
                        <img
                          src={image["data_url"]}
                          alt="image"
                          className="w-40 h-40 mt-2 border rounded-full"
                        />
                        <p className="text-center text-gray-400">
                          {image["file"]?.name}
                          <br />
                          size :{" "}
                          {(image["file"]?.size / (1024 * 1024)).toFixed(2)}MB
                        </p>
                        <div className="image-item__btn-wrapper">
                          <button
                            className="px-3 py-1 mt-2 mr-2 text-gray-400 border border-current rounded-md bg-slate-500"
                            onClick={() => onImageUpdate(index)}
                          >
                            Update
                          </button>
                          <button
                            className="px-3 py-1 mt-2 text-gray-400 border border-current rounded-md bg-slate-500"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  <span>Signing up...</span>
                </>
              ) : (
                <span>Sign Up</span>
              )}
            </button>
          </div>
          <p className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
            Already Registered?{" "}
            <Link
              href="/user/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-zinc-600"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegisterationForm;
