const iniData = async () => {
    try {
    let response = await getNama
    console.log(`response: `, response)
    } catch (err) {
    console.log(`error: ` ,err)
    }
    }

    console.log(iniData())