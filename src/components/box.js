import Circles from './circle'

function Box({data, actionDispacher}) {
  return (
    <div className="box" data-testid="box-ctr">
        <div className="boxContainer">
          <Circles data={data} onclickaction={actionDispacher}></Circles>
        </div>
    </div>
  );
}

export default Box;
