export const getProducts = async (marketId) => {
    try {
        const res = await fetch(
            'https://ec2-54-233-173-244.sa-east-1.compute.amazonaws.com:8083/products/' + marketId,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            }
        );
    
        const result = await res.json();
        return result;

    } catch (error) {
        console.error(error);
    }

}

