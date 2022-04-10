export const BodyfatMeasurementList = (props: {
  fields: {
    chest?: true;
    midauxilary?: true;
    tricep?: true;
    subscapular?: true;
    abdominal?: true;
    suprailiac?: true;
    thigh?: true;
  };
}) => {
  return (
    <ul>
      {props.fields.chest && (
        <li>
          Chest: The chest measurement is located between the nipple and the
          armpit. The skinfold pinch should in a diagonal line that is parallel
          to the direction of the nipple-armpit line.
        </li>
      )}
      {props.fields.midauxilary && (
        <li>
          Midaxillary: The midaxiliary location is the horizontal or vertical
          skinfold on the side of the torso at the fifth rib. Follow a
          horizontal line from the tip of your sternum.
        </li>
      )}
      {props.fields.tricep && (
        <li>
          Tricep: Take a vertical skinfold that is halfway between the top
          portion of the shoulder and the elbow.
        </li>
      )}
      {props.fields.subscapular && (
        <li>
          Subscapular: The subscapular site is located at the bottom tip of the
          shoulder blade. This shold be measured at a 45 degree angle.
        </li>
      )}
      {props.fields.abdominal && (
        <li>
          Abdominal: For the abdominal measurement, take a horizontal or
          vertical skinfold (whichever is most comfortable) that is one inch to
          the right of the belly button.
        </li>
      )}
      {props.fields.suprailiac && (
        <li>
          Suprailiac: The suprailiac measurement shold be taken be at a 45&deg;
          angle, going up and away from the body, approximately two inches above
          the iliac crest.
        </li>
      )}
      {props.fields.thigh && (
        <li>
          Thigh: The thigh measurement is located along the anterior portion the
          quadriceps muscle, halfway between the upper part of the knee and the
          fold at the top of the thigh.
        </li>
      )}
    </ul>
  );
};
