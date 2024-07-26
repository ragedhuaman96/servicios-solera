import { FC } from "react";

type CardProps = {
    title: string;
    body?: React.ReactNode;
    description?: string;
    footer?: React.ReactNode;
    width?: string;
    height?: string;
}

const Card: FC<CardProps> = ({ title, description, body, footer, height="100%", width="100%"}) => {
    return (
      <div className="rounded-md border border-gray-200" style={{ width, height }}>
        <header className="p-4 h-[30%]">
            <div className="text-lg font-semibold">{title}</div>
        </header>
        <div className="truncate p-4 h-[40%]">
            {description}
        </div>
        {body && (
        <section className="p-4 h-[40%]">
            {body}
        </section>
        )}
        {footer && (
            <footer className="p-4 bg-gray-200 rounded-b-md border border-t-gray-200 h-[30%] mt-auto flex items-center">
                {footer}
            </footer>
        )}
      </div>
    )
  }
  export default Card