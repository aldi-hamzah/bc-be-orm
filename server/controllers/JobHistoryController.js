const findAll = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.findAll();
    return res.send(jobHistory);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.findOne({
      where: {
        employee_id: req.params.id,
      },
    });
    return res.send(jobHistory);
  } catch (error) {
    return res.send(error);
  }
};

const created = async (req, res) => {
  try {
    const { employee_id, start_date, end_date, job_id, department_id } =
      req.body;
    const jobHistory = await req.context.models.job_history.create({
      employee_id: employee_id,
      start_date: start_date,
      end_date: end_date,
      job_id: job_id,
      department_id: department_id,
    });
    return res.send(jobHistory);
  } catch (error) {
    return res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const { start_date, end_date, job_id, department_id } = req.body;
    const jobHistory = await req.context.models.job_history.update(
      {
        start_date: start_date,
        end_date: end_date,
        job_id: job_id,
        department_id: department_id,
      },
      {
        returning: true,
        where: { employee_id: req.params.id },
      }
    );
    return res.send(jobHistory);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send(`Delete ${jobHistory} row!`);
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
