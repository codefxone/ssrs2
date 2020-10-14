package org.mardep.ssrs.dao.codetable;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Root;

import org.mardep.ssrs.dao.AbstractJpaDao;
import org.mardep.ssrs.dao.PredicateCriteria;
import org.mardep.ssrs.dao.PredicateCriteria.PredicateType;
import org.mardep.ssrs.domain.codetable.Registrar;
import org.springframework.stereotype.Repository;

@Repository
public class RegistrarJpaDao extends AbstractJpaDao<Registrar, Long> implements IRegistrarDao {

	@Override
	protected List<PredicateCriteria> resolvePredicateCriteriaList(final CriteriaBuilder cb, final Root<Registrar> listRoot) {
		List<PredicateCriteria> list = new ArrayList<PredicateCriteria>();
		list.add(new PredicateCriteria("id", PredicateType.EQUAL));
		list.add(new PredicateCriteria("name1", PredicateType.LIKE_IGNORE_CASE));
		list.add(new PredicateCriteria("name2", PredicateType.LIKE_IGNORE_CASE));

		return list;
	}
}