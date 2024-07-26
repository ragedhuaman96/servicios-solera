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
        <header className="p-4 h-[20%]">
            <div className="text-lg font-semibold">{title}</div>
        </header>
        {description &&(
        <div className="truncate p-4 h-[50%]">
            {description}
        </div>
        )
        }
        {body && (
        <section className="p-4 h-[50%]">
            {body}
        </section>
        )}
        {footer && (
            <footer className="p-4 bg-gray-100 border-t border-t-gray-100 rounded-b-md h-[30%] mt-auto flex items-center">
                {footer}
            </footer>
        )}
      </div>
    )
  }
  export default Card