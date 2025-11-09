import { ButtonLink } from "../ui/ButtonLink";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[18px] font-semibold text-neutral-300">
        ¿Tienes un proyecto?
      </h4>

      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
        <p className="max-w-[280px] text-neutral-300">
          ¡Hablemos y hagámoslo realidad!
        </p>

        <ButtonLink variant="incorrect" href="https://fedecodelab.vercel.app/">
          Comenzar proyecto
        </ButtonLink>
      </div>
    </div>
  );
};
