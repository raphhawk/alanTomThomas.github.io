export const Para = ({ para }) => {
  return (
    <p className="dark:text-green text-justify px-8 md:px-0">
      <span className="md:text-xl text-bgDark dark:text-bgLight">
        {para.head}
      </span>
      <br />
      {para.body}
    </p>
  );
};
