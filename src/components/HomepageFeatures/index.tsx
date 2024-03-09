import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/display-1.svg').default,
    description: (
      <>
        Sharing my study notes and being a girl who is a learner.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/display-2.svg').default,
    description: (
      <>
        Be a journal that can be published and share what I want to share.
      </>
    ),
  },
  {
    title: 'Life',
    Svg: require('@site/static/img/display-3.svg').default,
    description: (
      <>
        I have had a corgi with me all my life. I like to try all sorts of things I want to do.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
