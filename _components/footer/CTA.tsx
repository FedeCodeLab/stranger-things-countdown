import { Github, Linkedin, Mail, Portfolio } from "../ui/Icons";
import { ButtonLink } from "../ui/ButtonLink";
import Link from "next/link";

export const CTA = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h4 className="text-[18px] font-semibold text-neutral-300">
          Conecta conmigo
        </h4>
        <div className="flex flex-col gap-2 justify-center lg:justify-start items-center lg:items-start">
          <ButtonLink
            href="https://www.linkedin.com/in/federico-guzman/"
            variant="incorrect"
          >
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </ButtonLink>

          <ButtonLink href="https://github.com/FedeCodeLab" variant="incorrect">
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </ButtonLink>

          <ButtonLink
            href="https://fedecodelab.vercel.app/"
            variant="incorrect"
          >
            <Portfolio size={20} />
            <span className="font-medium">Portfolio</span>
          </ButtonLink>
        </div>
      </div>

      <Link
        href="mailto:federicoguzman.css@gmail.com"
        className="flex items-center gap-1 text-blue-500"
      >
        <Mail size={20} />
        <span className="underline">federicoguzman.css@gmail.com</span>
      </Link>
    </div>
  );
};
