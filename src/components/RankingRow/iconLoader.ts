declare const require: any; // Add this line to suppress TypeScript errors related to require.context()

const iconContext = require.context(
  '../../../node_modules/cryptocurrency-icons/svg/color/',
  true,
  /\.svg$/
);

type IconName = string;
type IconSVG = string;

const icons: Record<IconName, IconSVG> = iconContext
  .keys()
  .reduce((accumulator: Record<IconName, IconSVG>, iconPath: string) => {
    // Extract the icon name from the iconPath
    const iconName = iconPath.match(/\.\/(.+)\.svg$/)?.[1] ?? '';

    // Add the icon to the accumulator object with iconName as the key
    accumulator[iconName] = iconContext(iconPath).default;

    return accumulator;
  }, {});

export default icons;
