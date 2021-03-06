package org.mardep.ssrs.dao.codetable;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Root;

import org.mardep.ssrs.dao.AbstractJpaDao;
import org.mardep.ssrs.dao.PredicateCriteria;
import org.mardep.ssrs.dao.PredicateCriteria.PredicateType;
import org.mardep.ssrs.domain.codetable.ReasonCode;
import org.mardep.ssrs.domain.codetable.ReasonCodePK;
import org.springframework.stereotype.Repository;

@Repository
public class ReasonCodeJpaDao extends AbstractJpaDao<ReasonCode, ReasonCodePK> implements IReasonCodeDao {

	@Override
	protected List<PredicateCriteria> resolvePredicateCriteriaList(final CriteriaBuilder cb, final Root<ReasonCode> listRoot) {
		List<PredicateCriteria> list = new ArrayList<PredicateCriteria>();
		list.add(new PredicateCriteria("reasonCode", PredicateType.EQUAL));
		list.add(new PredicateCriteria("reasonType", PredicateType.EQUAL));
		list.add(new PredicateCriteria("engDesc", PredicateType.LIKE_IGNORE_CASE));
		list.add(new PredicateCriteria("chiDesc", PredicateType.LIKE_IGNORE_CASE));

		return list;
	}
}
