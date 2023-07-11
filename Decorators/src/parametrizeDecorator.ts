type ComponentOption = {
    selector : string
}
function ComponentParameter(option:ComponentOption){
    return (constructor : Function) => {
                console.log('Component decorator called.');
                constructor.prototype.option = option;
                constructor.prototype.uniqueId = Date.now();
                constructor.prototype.insertDom = () => {
                console.log('Inserting he component Dom');
            }
        }
}

@ComponentParameter({selector : '#id'})
class ProfileComponent2{

}


