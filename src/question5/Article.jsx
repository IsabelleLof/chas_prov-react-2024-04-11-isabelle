export default function Article({ title, text, children }) {
    const texts = {
      cats: "The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae.",
      dogs: "The dog (Canis familiaris[4][5] or Canis lupus familiaris[5]) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves,[6][7] and the gray wolf is the dog's closest living relative.",
      snakes: "",
      horses: "",
      pandas: "",
    };
  
    return <article className={`${texts[text]}`}>{title}<p>{text}</p></article>;
  }