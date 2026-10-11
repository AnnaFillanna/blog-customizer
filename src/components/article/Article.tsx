import { clsx } from 'clsx';
// Das Bild importieren, damit es in den Build aufgenommen wird.
import plane from 'src/images/plane.png';
import { Text } from 'src/ui/text';

import styles from './Article.module.scss';

export const Article = (): React.JSX.Element => {
  return (
    <article className={clsx(styles.article)}>
      <Text as="h1" size={45} weight={800} uppercase dynamicLite>
        Ein Porträt der Westschweiz
      </Text>
      <div className={styles.titleDescription}>
        <Text size={22} weight={800} uppercase align="center" dynamicLite>
          Der Künstler Fichtre gestaltet einen neuen kostengünstigen Verkehrsjet
        </Text>
      </div>
      <img
        className={styles.image}
        src={plane}
        alt="Flugzeug mit einer von Fichtre gestalteten Bemalung"
      />
      <Text dynamic size={18} fontStyle="italic">
        Foto: Hans-Peter Gauster, &quot;Bombardier CSeries CS300 HB-JCA&quot; © 2017 CC
        BY-SA 2.0
      </Text>
      <Text dynamic size={18}>
        Ende 2016 erhielt die Schweizer Fluggesellschaft Swiss ihre erste kanadische
        Bombardier CS300 für Kurz- und Mittelstreckenflüge. Um dem neuen Flugzeug mit 145
        Sitzplätzen einen unverwechselbaren Charakter zu verleihen, wurde ein Maler mit
        der Gestaltung beauftragt. Die Bedingung: Er sollte den Entwurf allein
        ausarbeiten und die Bemalung beim Auftragen auf den Rumpf persönlich korrigieren.
      </Text>
      <Text dynamic size={18}>
        Die Wahl fiel auf den Künstler Mathias Forbach, der unter dem Pseudonym Fichtre
        arbeitet und der naiven Kunst zuzuordnen ist. Er sollte das Beste der
        französischsprachigen Schweiz darstellen: Berge, Seen, Wein, Käse,
        Gastfreundschaft und Freiheit. Der Auftrag wurde in der Rekordzeit von nur fünf
        Monaten umgesetzt. Das Flugzeug ähnelt seinem Schöpfer: ebenso gutmütig und mit
        einem breiten Lächeln.
      </Text>
      <Text dynamic size={18}>
        Seit Mai 2017 trägt die Bombardier den Namen &quot;Schweizer Romandie&quot; und
        das Kennzeichen HB-JCA. Sie absolviert durchschnittlich vier kommerzielle Flüge
        pro Tag. Zu sehen ist sie in Domodedowo sowie an den Flughäfen von Paris,
        Valencia, Krakau, Berlin, Wien und Zagreb sowie auf Mallorca, Kreta und Sizilien.
        Die Bemalung bleibt erhalten, bis eine andere Fluggesellschaft das Flugzeug
        kauft.
      </Text>
    </article>
  );
};
