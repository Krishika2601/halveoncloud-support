import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
const FeatureList = [
  {
    title: 'Real-Time Monitoring',
    Svg: require('@site/static/img/real_time_monitoring.svg').default,
    description: 'Monitor device temperature, humidity, and battery levels in real-time with intuitive charts.',
  },
  {
    title: 'Device Configuration',
    Svg: require('@site/static/img/device_configuration.svg').default,
    description: 'Easily configure device settings, including alarms, flight modes, and location mapping.',
  },
  {
    title: 'Powerful Analytics',
    Svg: require('@site/static/img/analytics.svg').default,
    description: 'Gain insights from historical data and export detailed reports for compliance and analysis.',
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
