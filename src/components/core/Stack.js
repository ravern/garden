/** @jsx jsx */

import { Children, cloneElement } from "react";
import { Flex, jsx } from "theme-ui";

export default function Stack({ children, ...props }) {
  const { gap, direction, justify, align } = props;

  return (
    <Flex
      {...props}
      sx={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {Children.map(children, (child, index) =>
        cloneElement(
          child,
          direction === "column"
            ? { mt: index === 0 ? 0 : gap }
            : { ml: index === 0 ? 0 : gap }
        )
      )}
    </Flex>
  );
}
