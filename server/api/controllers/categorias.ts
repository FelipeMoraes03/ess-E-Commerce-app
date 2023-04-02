module.exports = () => {
    const Categoria = require("../../models/categoriaModel")();
    
    const controller = {
        createCategory: async (req: any, res: any) => {
            console.log(`POST`);
            /* Cria uma nova categoria */
            try {
                const novaCategoria = await Categoria.create(req.body)
                res.status(200).json(novaCategoria);
            } catch (err) {
                res.status(500).send(err);
            }
        },

        getAllCategories: async (req: any, res: any) => {
            console.log(`GET`);
            /* Retorna todos as categorias */
            try {
                const categorias = await Categoria.find({}, { _id: false });
                res.json(categorias);
            } catch (err) {
                res.status(500).send(err);
            }
        },

        updateCategory: async (req: any, res: any) => {
            console.log(`PUT`);
            /* Atualiza a descrição de uma categoria */
            try {
                const { id } = req.params;
                await Categoria.findByIdAndUpdate(id, req.body);
                res.status(200).json({ message: "Categoria atualizada"});
            }
            catch (err) {
                res.status(500).send(err);
            }
        },
    };

    return controller;
};