async function entrenar(modelo){
    const red = await model.fit(
        xs,
        ys,
        {
            epochs:1000,
            callbacks:{
                onEpochEnd:async(epoch,logs)=>{
                    //console.log("Epoch: " + epoch)
                }
            }
        }
    )
}
const model = tf.sequential()
    model.add(tf.layers.dense(
        {units:1,inputShape:[3]} //la entrada es de 3 datos, 3 neuronas, la salida 1
        ))
    model.compile(
        {
            loss:'meanSquaredError',
            optimizer:'sgd'
        }
    )
    const xs = tf.tensor([ [0,0,0],[1,1,1] ],[2,3]) //matriz 2x3
    const ys = tf.tensor([ [1],[0] ],[2,1]) //matriz 2x1
    entrenar(model).then(()=>{
       
})