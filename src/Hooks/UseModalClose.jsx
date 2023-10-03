const UseModalClose = () => {
    const modalClose = () => {
        const modal3 = document.getElementById('my_modal_3')
        const modal4 = document.getElementById('my_modal_4')
        modal3.close()
        modal4.close()
    }

    return { modalClose }
};

export default UseModalClose;