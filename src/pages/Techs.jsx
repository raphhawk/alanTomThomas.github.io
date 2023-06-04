export const Techs = ({ tecs }) => {
  return (
    <div className="mt-4 text-left ml-4">
      <h3 className="mb-4 text-l dark:text-yellow">Technologies Used: </h3>
      <ul className="flex flex-col ml-4 md:grid md:grid-cols-4 gap-2">
        {tecs.map((t) => {
          return (
            <li className="mx-4 capitalize" key={t.name}>
              <a
                href={t.link}
                target="_blank"
                className="flex flex-row dark:text-bgLight hover:text-blue dark:hover:text-blue transition duration-150"
              >
                <img
                  src={t.ico}
                  className={t.dark ? "w-12 mr-4 dark:invert" : "w-12 mr-4"}
                />
                {t.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
