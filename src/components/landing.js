import { useEffect, useState } from "react";
import { Divider } from "./SpacingComponents";
import axios from "axios";

export const Landing = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        //console.log("Getting Data: ", res.data.results[0].name.first);
        setFirstName(res.data.results[0].name.first);
        setLastName(res.data.results[0].name.last);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1 className="text-5xl">Accounted</h1>
      <Divider />
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 transition-all duration-100">
        {[...Array(50)].map((x, i) => (
          <div className="card lg:card-side bg-base-100 shadow-xl z-[-99999]">
            <figure>
              {!isLoading ? (
                <img
                  className="transition-all ease-linear z-[-99999]"
                  style={{}}
                  src={"https://picsum.photos/200/300?random=" + i}
                  alt="Album"
                />
              ) : (
                <svg
                  class="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                ></svg>
              )}
            </figure>
            <div className="card-body z-[-99999]">
              {firstName + " " + lastName}
              <h2 className="card-title">{}</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary bg-green-600 hover:bg-green-500 border-transparant ">
                  Listen
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
};
export default Landing;
