const findAll = async (req, res) => {
  try {
    const region = await req.context.models.regions.findAll();
    return res.send(region);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const region = await req.context.models.regions.findOne({
      where: { region_id: req.params.id },
    });
    return res.send(region);
  } catch (error) {
    return res.send(error);
  }
};

const created = async (req, res) => {
  try {
    const region = await req.context.models.regions.create({
      region_name: req.body.name,
    });
    return res.send(region);
  } catch (error) {
    return res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const region = await req.context.models.regions.update(
      {
        region_name: req.body.name,
      },
      { returning: true, where: { region_id: req.params.id } }
    );
    return res.send(region);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const region = await req.context.models.regions.destroy({
      where: { region_id: req.params.id },
    });
    return res.send('delete ' + region + ' row');
  } catch (error) {
    return res.send(error);
  }
};

export default {
  findAll,
  findOne,
  created,
  updated,
  deleted,
};
