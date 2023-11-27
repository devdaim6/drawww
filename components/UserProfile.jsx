"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { Badge, Chip, Skeleton } from "@nextui-org/react";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const revalidate = 1;
const UserProfile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });

  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    createdAt: "",
    lastLoggedInTime: "",
  });
  const [inititalFormState, setInititalFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    disabled: {
      name: true,
      email: true,
      username: true,
      password: true,
      image: true,
    },
    editable: {
      name: false,
      email: false,
      username: false,
      password: false,
      image: false,
    },
  });

  const pathname = usePathname();
  const [image, setImage] = useState("");
  const [imageCheck, setImageCheck] = useState("");
  const [visibleButtons, setVisibleButtons] = useState(false);

  /**
   * The function `convertImageToBase64` takes an event object as a parameter, reads the selected image
   * file, and converts it to a base64 encoded string.
   */
  const convertImageToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageCheck(reader.result);
    };
  };

  /**
   * The function `handleImageUpdate` sends a POST request to update a user's image and displays a
   * success message if the request is successful.
   */
  const handleImageUpdate = async () => {
    try {
      const res = await fetch(`/api/v1/user/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: imageCheck,
          username: session?.session?.user?.username,
        }),
      });
      const response = await res.json();
      if (response.success) {
        toast.success(response.message);
        setVisibleButtons((prev) => !prev);
        revalidatePath(pathname);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * The function `handleUserDetailsUpdate` is an asynchronous function that sends a PATCH request to
   * update user details and logs the response.
   */
  const handleUserDetailsUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/v1/user/${session?.session?.user?.username}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            updateData: {
              name: userDetails?.name,
              email: userDetails?.email,
              username: userDetails?.username,
              password: userDetails?.password,
            },
          }),
        }
      );

      const response = await res.json();
      // console.log(response);
      if (response.success) {
        toast.success(response.message);
        revalidatePath(pathname);
      } else {
        toast.error(response.message);
        setUserDetails(inititalFormState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* The above code is a React useEffect hook that is triggered when the "status" variable is set to
  "authenticated". It fetches user details from an API endpoint using the username from the session
  object. The fetched user details are then stored in the "userDetails" state variable and the
  "image" state variable is also updated. The code also sets the "loading" state variable to true
  while the data is being fetched and sets it to false once the data is fetched. Finally, if the
  "status" variable is set to "loading", the code renders a "Loading..." message. */
  useEffect(() => {
    if (status == "authenticated") {
      const fetchDetails = async () => {
        setLoading(true);
        const res = await fetch(
          `/api/v1/user/${session?.session?.user?.username}`,
          { cache: "no-store" }
        );
        const response = await res.json();
        setUserDetails(response?.user);
        setInititalFormState(response?.user);
        setLoading(false);
        setImage(response?.user?.image);
        // console.log(response);
      };
      fetchDetails();
    }
  }, [session?.session?.user?.username, status]);

  // if (status === "loading") return <>Loading...</>;

  return (
    <>
      {
        <section className="pb-10 mb-10">
          <div className="flex flex-col items-center justify-center my-3 mt-5">
            {status == "loading" ? (
              <Skeleton className="flex w-32 h-32 rounded-full z-15" />
            ) : (
              <Image
                src={!imageCheck ? image : imageCheck}
                alt=""
                width={0}
                height={0}
                className="w-20 h-20 border border-gray-500 rounded-full"
              />
            )}
            {status == "loading" ? (
              <Skeleton className="mt-1 rounded-lg w-60 z-15">
                <div className="w-full h-6 pt-2 mt-2 rounded-lg bg-default-200"></div>
              </Skeleton>
            ) : (
              <input
                onChange={(e) => {
                  convertImageToBase64(e);
                  setVisibleButtons((prev) => !prev);
                }}
                className={`block mt-4 lg:w-1/6 w-3/6 text-sm text-gray-900 border border-gray-300 rounded-lg ${
                  !userData?.disabled?.image
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                } bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                readOnly
                disabled={userData?.disabled?.image}
              />
            )}{" "}
            {!visibleButtons && (
              <>
                {status == "authenticated" && (
                  <button
                    onClick={() => {
                      setUserData((prev) => ({
                        ...prev,
                        disabled: {
                          ...prev.disabled,
                          image: !prev.disabled.image,
                        },
                      }));
                    }}
                    className="absolute text-blue-500 "
                  >
                    <BiMessageSquareEdit size={25} />
                  </button>
                )}
              </>
            )}
            {visibleButtons ? (
              <div className="flex my-4 space-x-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setImageCheck("");
                    setVisibleButtons(false);
                  }}
                >
                  <RxCross2 size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageUpdate();
                  }}
                >
                  <IoMdCheckmark size={20} />
                </button>
              </div>
            ) : null}
          </div>
          <form className="mt-8">
            <div className="relative z-0 w-full mb-6 group">
              <h1 className="font-semibold text-md">Full Name</h1>{" "}
              {status == "loading" ? (
                <Skeleton className="w-screen rounded-lg">
                  <div className="w-full h-10 rounded-lg bg-default-200"></div>
                </Skeleton>
              ) : (
                <input
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      name: e.target.value,
                    });
                  }}
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    userData?.editable?.name
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  } dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  value={userDetails?.name}
                  disabled={userData?.disabled?.name}
                  placeholder="Full Name"
                />
              )}{" "}
              {userData?.editable?.name ? (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setUserData((prev) => ({
                        ...prev,
                        editable: {
                          ...prev.editable,
                          name: !prev.editable.name,
                        },
                        disabled: {
                          ...prev.disabled,
                          name: !prev.disabled.name,
                        },
                      }));
                      setUserDetails({
                        ...userDetails,
                        name: inititalFormState?.name,
                      });
                    }}
                    className="absolute right-0 z-10 mr-8 bottom-2"
                  >
                    <RxCross2 size={30} color="red" />
                  </button>
                  <button
                    onClick={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        editable: {
                          ...prev.editable,
                          name: !prev.editable.name,
                        },
                        disabled: {
                          ...prev.disabled,
                          name: !prev.disabled.name,
                        },
                      }));
                      handleUserDetailsUpdate(e);
                    }}
                    className="absolute right-0 z-10 text-green-500 bottom-2"
                  >
                    <IoMdCheckmark size={30} />
                  </button>
                </>
              ) : (
                <>
                  {status == "authenticated" && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUserData((prev) => ({
                          ...prev,
                          editable: {
                            ...prev.editable,
                            name: !prev.editable.name,
                          },
                          disabled: {
                            ...prev.disabled,
                            name: !prev.disabled.name,
                          },
                        }));
                      }}
                      className="absolute right-0 z-10 text-blue-500 bottom-2"
                    >
                      <BiMessageSquareEdit size={30} />
                    </button>
                  )}
                </>
              )}
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <div>
                <h1 className="font-semibold text-md">
                  Email Address{" "}
                  {status == "authenticated" && (
                    <Badge
                      content={
                        userDetails?.isVerified ? "verified" : "not verified"
                      }
                      color={userDetails?.isVerified ? "success" : "warning"}
                      size="sm"
                      variant="faded"
                      placement="top-right"
                      showOutline={false}
                    >
                      {userDetails?.isVerified ? (
                        <div className="w-6 pb-3 mb-3"></div>
                      ) : (
                        <div className="pb-3 mb-3 w-9"></div>
                      )}
                    </Badge>
                  )}
                </h1>
                <div className="flex">
                  {status == "loading" ? (
                    <Skeleton className="w-screen rounded-lg a-15">
                      <div className="w-full h-10 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  ) : (
                    <input
                      onChange={(e) => {
                        setUserDetails({
                          ...userDetails,
                          email: e.target.value,
                        });
                      }}
                      type="email"
                      id="disabled-input-2"
                      value={userDetails?.email}
                      disabled={userData?.disabled?.email}
                      aria-label="userData?.disabled input 2"
                      className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                        userData?.editable?.email
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      } dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Email Address"
                    />
                  )}
                  {status == "authenticated" && !userDetails?.isVerified && (
                    <button className="absolute z-10 pr-2 mt-1 right-8">
                      <Link
                        href={`/user/email_verification?username=${session?.session?.user?.username}`}
                      >
                        <Chip color="danger" variant="dot">
                          Verify
                        </Chip>
                      </Link>
                    </button>
                  )}
                </div>
              </div>
              {userData?.editable?.email ? (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setUserData((prev) => ({
                        ...prev,
                        editable: {
                          ...prev.editable,
                          email: !prev.editable.email,
                        },
                        disabled: {
                          ...prev.disabled,
                          email: !prev.disabled.email,
                        },
                      }));
                      setUserDetails({
                        ...userDetails,
                        email: inititalFormState?.email,
                      });
                    }}
                    className="absolute right-0 z-10 mr-8 bottom-2"
                  >
                    <RxCross2 size={30} color="red" />
                  </button>
                  <button
                    onClick={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        editable: {
                          ...prev.editable,
                          email: !prev.editable.email,
                        },
                        disabled: {
                          ...prev.disabled,
                          email: !prev.disabled.email,
                        },
                      }));
                      handleUserDetailsUpdate(e);
                    }}
                    className="absolute right-0 z-10 text-green-500 bottom-2"
                  >
                    <IoMdCheckmark size={30} />
                  </button>
                </>
              ) : (
                <>
                  {!userDetails && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUserData((prev) => ({
                          ...prev,
                          editable: {
                            ...prev.editable,
                            email: !prev.editable.email,
                          },
                          disabled: {
                            ...prev.disabled,
                            email: !prev.disabled.email,
                          },
                        }));
                      }}
                      className="absolute right-0 z-10 text-blue-500 bottom-2"
                    >
                      <BiMessageSquareEdit size={30} />
                    </button>
                  )}
                </>
              )}
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                {" "}
                <div>
                  <h1 className="font-semibold text-md">Username</h1>
                  {status == "loading" ? (
                    <Skeleton className="w-full rounded-lg">
                      <div className="w-full h-10 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  ) : (
                    <input
                      onChange={(e) => {
                        setUserDetails({
                          ...userDetails,
                          username: e.target.value,
                        });
                      }}
                      type="text"
                      id="disabled-input-2"
                      value={userDetails?.username}
                      disabled={userData?.disabled?.username}
                      aria-label="disabled input 2"
                      className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                        userData?.editable?.username
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      } dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Username"
                    />
                  )}
                </div>
                {userData?.editable?.username ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUserData((prev) => ({
                          ...prev,
                          editable: {
                            ...prev.editable,
                            username: !prev.editable.username,
                          },
                          disabled: {
                            ...prev.disabled,
                            username: !prev.disabled.username,
                          },
                        }));
                        setUserDetails({
                          ...userDetails,
                          username: inititalFormState?.username,
                        });
                      }}
                      className="absolute right-0 z-10 mr-8 bottom-2"
                    >
                      <RxCross2 size={30} color="red" />
                    </button>
                    <button
                      onClick={(e) => {
                        setUserData((prev) => ({
                          ...prev,
                          editable: {
                            ...prev.editable,
                            username: !prev.editable.username,
                          },
                          disabled: {
                            ...prev.disabled,
                            username: !prev.disabled.username,
                          },
                        }));
                        handleUserDetailsUpdate(e);
                      }}
                      className="absolute right-0 z-10 text-green-500 bottom-2"
                    >
                      <IoMdCheckmark size={30} />
                    </button>
                  </>
                ) : (
                  <>
                    {status == "authenticated" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setUserData((prev) => ({
                            ...prev,
                            editable: {
                              ...prev.editable,
                              username: !prev.editable.username,
                            },
                            disabled: {
                              ...prev.disabled,
                              username: !prev.disabled.username,
                            },
                          }));
                        }}
                        className="absolute right-0 z-10 text-blue-500 bottom-2"
                      >
                        <BiMessageSquareEdit size={30} />
                      </button>
                    )}
                  </>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                {" "}
                <div>
                  <h1 className="font-semibold text-md">Password</h1>
                  {status == "loading" ? (
                    <Skeleton className="w-full rounded-lg">
                      <div className="w-full h-10 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  ) : (
                    <input
                      onChange={(e) => {
                        setUserDetails({
                          ...userDetails,
                          password: e.target.value,
                        });
                      }}
                      type="password"
                      id="disabled-input-2"
                      disabled={userData?.disabled?.password}
                      aria-label="disabled input 2"
                      className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                        userData?.editable?.password
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      } dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      value={userDetails?.password}
                      placeholder="Password"
                    />
                  )}
                </div>
                {userData?.editable?.password ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUserData((prev) => ({
                          ...prev,
                          editable: {
                            ...prev.editable,
                            password: !prev.editable.password,
                          },
                          disabled: {
                            ...prev.disabled,
                            password: !prev.disabled.password,
                          },
                        }));
                        setUserDetails({
                          ...userDetails,
                          password: inititalFormState?.password,
                        });
                      }}
                      className="absolute right-0 z-10 mr-8 bottom-2"
                    >
                      <RxCross2 size={30} color="red" />
                    </button>
                    <button
                      onClick={(e) => {
                        setUserData((prev) => ({
                          ...prev,
                          editable: {
                            ...prev.editable,
                            password: !prev.editable.password,
                          },
                          disabled: {
                            ...prev.disabled,
                            password: !prev.disabled.password,
                          },
                        }));
                        handleUserDetailsUpdate(e);
                      }}
                      className="absolute right-0 z-10 text-green-500 bottom-2"
                    >
                      <IoMdCheckmark size={30} />
                    </button>
                  </>
                ) : (
                  <>
                    {status == "authenticated" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setUserData((prev) => ({
                            ...prev,
                            editable: {
                              ...prev.editable,
                              password: !prev.editable.password,
                            },
                            disabled: {
                              ...prev.disabled,
                              password: !prev.disabled.password,
                            },
                          }));
                        }}
                        className="absolute right-0 z-10 text-blue-500 bottom-2"
                      >
                        <BiMessageSquareEdit size={30} />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6 gap-y-6">
              <div>
                <h1 className="font-semibold text-md">Account Creation Date</h1>
                {status == "loading" ? (
                  <Skeleton className="w-full rounded-lg">
                    <div className="w-full h-10 rounded-lg bg-default-200"></div>
                  </Skeleton>
                ) : (
                  <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={
                      new Date(userDetails?.createdAt).toLocaleDateString() +
                      "  " +
                      new Date(userDetails?.createdAt).toLocaleTimeString()
                    }
                    disabled
                    readOnly
                    placeholder="Account Created At"
                  />
                )}
              </div>

              <div>
                <h1 className="font-semibold text-md">Last Session</h1>
                {status == "loading" ? (
                  <Skeleton className="w-full rounded-lg">
                    <div className="w-full h-10 rounded-lg bg-default-200"></div>
                  </Skeleton>
                ) : (
                  <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={
                      new Date(
                        userDetails?.lastLoggedInTime
                      ).toLocaleDateString() +
                      "  " +
                      new Date(
                        userDetails?.lastLoggedInTime
                      ).toLocaleTimeString()
                    }
                    disabled
                    readOnly
                    placeholder="Account Created At"
                  />
                )}
              </div>
            </div>
            {/* <div className="flex items-center justify-center my-5">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div> */}
          </form>
        </section>
      }
    </>
  );
};

export default UserProfile;
