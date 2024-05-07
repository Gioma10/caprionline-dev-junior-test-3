export default function Layout({children}){
    return (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            {children}
          </div>
        </section>
      );
}