import { Spinner } from "flowbite-react";

export default function MovieList({loading, children, noMovie}){
  if (loading) {
    return (
      <div className="text-center">
            <Spinner size="xl" />
          </div>
        );
      }
      
      let classDiv= "grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3";
    
      if(noMovie){
        classDiv= "flex items-center justify-center";
      }
      return (
        <div className={classDiv}>
          {children}
        </div>
      );
}