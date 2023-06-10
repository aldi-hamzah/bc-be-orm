const findAll = async (req, res) => {
  try {
    const jobs = await req.context.models.jobs.findAll();
    return res.send(jobs);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const jobs = await req.context.models.jobs.findOne({
      where: { job_id: req.params.id },
    });
    return res.send(jobs);
  } catch (error) {
    return res.send(error);
  }
};

const created = async (req, res) => {
  const { job_id, job_title, min_salary, max_salary } = req.body;
  try {
    const jobs = await req.context.models.jobs.create({
      job_id: job_id,
      job_title: job_title,
      min_salary: min_salary,
      max_salary: max_salary,
    });
    return res.send(jobs);
  } catch (error) {
    return res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const { job_id, job_title, min_salary, max_salary } = req.body;
    const jobs = await req.context.models.jobs.update(
      {
        job_id: job_id,
        job_title: job_title,
        min_salary: min_salary,
        max_salary: max_salary,
      },
      {
        returning: true,
        where: { job_id: req.params.id },
      }
    );
    return res.send(jobs);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const jobs = await req.context.models.jobs.destroy({
      where: { job_id: req.params.id },
    });
    return res.send(`Delete ${jobs} row!`);
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
